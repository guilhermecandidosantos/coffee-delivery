import { useFormContext } from 'react-hook-form'
import { InputsContainer } from './styles'

export function InputsForm() {
  const { register } = useFormContext()

  return (
    <InputsContainer>
      <input
        type="text"
        placeholder="CEP"
        pattern="\d{5,5}(\d{3,3})?"
        {...register('zip')}
      />
      <input type="text" placeholder="Rua" {...register('street')} />
      <div>
        <input
          type="number"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
        />
        <input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </div>
      <div>
        <input type="text" placeholder="Bairro" {...register('district')} />
        <input type="text" placeholder="Cidade" {...register('city')} />
        <input type="text" placeholder="UF" {...register('uf')} />
      </div>
    </InputsContainer>
  )
}
