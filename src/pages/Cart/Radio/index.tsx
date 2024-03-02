import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { RadioContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { forwardRef, LegacyRef } from 'react'

interface RadioProps {
  typePayment: 'credit' | 'debit' | 'money'
  description: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
}

export const Radio = forwardRef(function Radio(
  props: RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const { register, watch } = useFormContext()

  const paymentSelected = watch('paymentMethod')

  function renderImgPayment(param: string) {
    switch (param) {
      case 'credit':
        return <CreditCard size={18} />
      case 'debit':
        return <Bank size={18} />
      case 'money':
        return <Money size={18} />
      default:
        return ''
    }
  }
  return (
    <RadioContainer data-state={paymentSelected === props.typePayment}>
      <input
        type="radio"
        {...register('paymentMethod')}
        value={props.typePayment}
        ref={ref}
      />
      {renderImgPayment(props.typePayment)}
      {props.description}
    </RadioContainer>
  )
})
