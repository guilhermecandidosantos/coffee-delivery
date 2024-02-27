import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { RadioContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface RadioProps {
  typePayment: 'credit' | 'debit' | 'money'
}

export function Radio({ typePayment }: RadioProps) {
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
    <RadioContainer data-state={paymentSelected === typePayment}>
      <input type="radio" {...register('paymentMethod')} value={typePayment} />
      {renderImgPayment(typePayment)}
      Cartão de credito
    </RadioContainer>
  )
}
