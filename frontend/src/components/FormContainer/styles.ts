import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  mt-2
  font-indie_flower
  text-slate-700
  font-bold
  before:content-['<form>']
  after:content-['</form>']
`

export const FormWrapper = tw.div`
  ml-4
  text-gray-200
  mb-2
  font-body
  font-normal
`
