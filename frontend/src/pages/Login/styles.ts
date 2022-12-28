import tw from 'tailwind-styled-components'

export default {
  Wrapper: tw.section`
    min-h-screen
    min-w-full
    h-full
    w-screen
  `,
  Container: tw.div`
    flex
    flex-col
    justify-center
    items-center
    h-full
    gap-6
    text-gray-800
    container
    w-80
    mx-auto
    py-8
  `,
  Form: tw.form`
    flex
    flex-col
    gap-6
    w-full
  `,
  Input: tw.input`
    form-control
    block
    w-full
    px-4
    py-2
    font-normal
    text-gray-700
    bg-white
    bg-clip-padding
    border
    border-solid
    border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700
    focus:bg-white
    focus:border-blue-600
    focus:outline-none
  `,
  CheckboxWrapper: tw.div`
    form-group
    form-check
  `,
  Checkbox: tw.input`
    form-check-input
    appearance-none
    h-4
    w-4
    border
    border-gray-300
    rounded-sm
    bg-white
    checked:bg-slate-800
    checked:border-blue-600
    checked:border-2
    focus:outline-none
    transition
    duration-200
    mt-1
    align-top
    bg-no-repeat
    bg-center
    bg-contain
    float-left
    mr-2
    cursor-pointer
  `,
  Label: tw.label`
    form-check-label
    inline-block
    text-gray-400
  `,
  ForgotPassword: tw.a`
    text-gray-500
    hover:text-gray-400
    focus:text-gray-600
    active:text-gray-800
    duration-200
    transition
    ease-in-out
  `,
  Divisor: tw.p`
    ${(props: {
      // xs | sm | base | lg | xl | 0xl - 9xl
      $textSize: string
    }) => `text-${props.$textSize}`}
    text-center
    font-semibold
    mx-4
    mb-0
  `,
  DivisorWrapper: tw.div`
    flex
    items-center
    before:flex-1
    before:border-t
    before:border-gray-300
    before:mt-0.5
    after:flex-1
    after:border-t
    after:border-gray-300
    after:mt-0.5
  `,
  UsernameOrEmail: tw.div`
    rounded-md
    border
    border-gray-300
    p-2
    flex
    flex-col
    gap-2
  `,
  PasswordHelpers: tw.div`
    flex
    justify-between
    items-center
  `
}
