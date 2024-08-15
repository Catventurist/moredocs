interface DefaultConfig {
  site: {
    name: string;
    description: string;
    ogImage: string;
  };
  theme: {
    customizable: boolean;
    color: Color;
    radius: number;
  };
  header: {
    showLoadingIndicator: boolean;
    title: string;
    showTitle: boolean;
    border: boolean;
    logo: {
      light: string;
      dark: string;
    };
    showTitleInMobile: boolean;
    darkModeToggle: boolean;
    nav: ({
      icon: string;
      title: string;
      to: string;
      target: string;
      links: ({
        icon: string;
        title: string;
        to: string;
        target: string;
        description: string;
      })[];
    })[];
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
  };
  aside: {
    useLevel: boolean;
    collapse: boolean;
  };
  main: {
    breadCrumb: boolean;
    showTitle: boolean;
    codeCopyToast: boolean;
    codeCopyToastText: string;
    fieldRequiredText: string;
    codeIcon: {
      [key: string]: string;
    };
    padded: boolean;
  };
  footer: {
    credits: string;
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
  };
  toc: {
    enable: boolean;
    enableInMobile: boolean;
    title: string;
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
  };
  search: {
    enable: boolean;
    inAside: boolean;
    style: 'input' | 'button';
    placeholder: string;
    placeholderDetailed: string;
  };
  insta: {
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
  };
  dash: {
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
    promo: ({
      icon: string;
      title: string;
      description: string;
      content: string;
      to: string;
      target: string;
    })[];
  };
}

type Color =
  | 'zinc'
  | 'slate'
  | 'stone'
  | 'gray'
  | 'neutral'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet';
