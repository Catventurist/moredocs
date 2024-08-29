<script setup lang="ts">
import { toast } from '@/components/ui/toast'
import { useLocale, useLocaleDate, useLocales } from '@/composables/useLocal'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))

const formSchema = toTypedSchema(z.object({
  locale: z
    .string({
      required_error: 'Please select the language to display.',
    })
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <form class="w-44 space-y-6" @submit="onSubmit">
    <UiFormField v-slot="{ componentField }" name="locale">
      <UiFormItem>
        <UiFormLabel>Locale</UiFormLabel>
        <UiSelect v-bind="componentField">
          <UiFormControl>
            <UiSelectTrigger>
              <UiSelectValue placeholder="Select a locale" />
            </UiSelectTrigger>
          </UiFormControl>
          <UiSelectContent>
            <UiSelectGroup id="locale-chooser" v-model="locale">
              <UiSelectItem v-for="locale of locales" :key="locale" :value="locale">
                {{ locale }}
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
        <UiFormDescription>
          {{ date }}
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>
    <UiButton type="submit">
      Submit
    </UiButton>
  </form>
</template>
