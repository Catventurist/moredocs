<template>
  <UiCard class="relative items-center justify-center min-h-screen p-4 w-full max-w-xl">
    <UiCardHeader>
      <UiCardTitle class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">
          Write something
        </h3>
        <UiButton variant="ghost">
          <Icon name="lucide:x" />
          <span class="sr-only">Close</span>
        </UiButton>
      </UiCardTitle>
    </UiCardHeader>
    <UiCardContent class="relative mb-4 grid grid-row">
      <form class="w-full" @submit="onSubmit">
        <UiFormField v-slot="{ componentField }" name="mess">
          <UiFormItem>
            <UiFormLabel>
              Message
            </UiFormLabel>
            <UiFormControl>
              <UiTextarea placeholder="Write freely" v-bind="componentField" />
            </UiFormControl>
            <UiFormMessage />
          </UiFormItem>
          <UiButton type="submit" variant="outline" class="w-full mt-2">
            <Icon name="lucide:send" class="size-6 text-muted-foreground duration-300 hover:text-foreground right-2" />
            <span class="sr-only">Submit</span>
          </UiButton>
        </UiFormField>
        <section class="flex flex-col px-4 justify-center gap-2">
          <UiFormField v-slot="{ componentField }" name="image">
            <UiFormItem>
              <UiFormControl>
                <div class="relative items-center group">
                  <UiInput id="image" type="file" :rules="{ image: true }" placeholder="Image"
                    class="pl-10 group-hover:bg-primary/20" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Icon name="lucide:image"
                      class="size-6 text-muted-foreground duration-300 group-hover:text-foreground" />
                  </span>
                </div>
              </UiFormControl>
            </UiFormItem>
          </UiFormField>
          <UiFormField v-slot="{ componentField }" name="file">
            <UiFormItem>
              <UiFormControl>
                <div class="relative items-center group">
                  <UiInput id="file" type="file" class="pl-10 group-hover:bg-primary/20" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Icon name="lucide:paperclip"
                      class="size-6 text-muted-foreground duration-300 group-hover:text-foreground" />
                  </span>
                </div>
              </UiFormControl>
            </UiFormItem>
          </UiFormField>
          <UiFormField v-slot="{ componentField }" name="emoji">
            <UiFormItem>
              <UiFormControl>
                <div class="relative items-center group">
                  <UiInput id="emoji" type="file" class="pl-10 group-hover:bg-primary/20"
                    :rules="{ image: true, size: 250 }" placeholder="emoji" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Icon name="lucide:laugh"
                      class="size-6 text-muted-foreground duration-300 group-hover:text-foreground" />
                  </span>
                </div>
              </UiFormControl>
            </UiFormItem>
          </UiFormField>
        </section>
      </form>
    </UiCardContent>
  </UiCard>
</template>


<script setup lang="ts">
import { toast } from '@/components/ui/toast';
import { MessageSchema } from '@/lib/MessageSchema';
import { useForm } from 'vee-validate';
import { h } from 'vue';

const { handleSubmit } = useForm({
  validationSchema: MessageSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script> 