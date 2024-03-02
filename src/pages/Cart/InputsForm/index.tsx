import { useFormContext } from 'react-hook-form'
import { InputsContainer } from './styles'

export function InputsForm() {
  const { register, watch } = useFormContext()

  const complement = watch('complement')

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
        <div>
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            name="complement"
          />
          {String(complement).length === 0 ? (
            <span>Optional</span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      <div>
        <input type="text" placeholder="Bairro" {...register('district')} />
        <input type="text" placeholder="Cidade" {...register('city')} />
        <input type="text" placeholder="UF" {...register('uf')} />
      </div>
    </InputsContainer>
  )
}
