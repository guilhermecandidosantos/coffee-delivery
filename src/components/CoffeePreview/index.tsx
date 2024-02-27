import { CoffeePreviewContainer } from './styles'
import expresso from '../../assets/coffees/expresso.svg'
import { InputNumber } from '../InputNumber'
import { Trash } from '@phosphor-icons/react'

export function CoffeePreview() {
  return (
    <CoffeePreviewContainer>
      <img src={expresso} alt="" />

      <div>
        <h3>Expresso Tradicional</h3>
        <div>
          <InputNumber />
          <button name="remove">
            <span>
              <Trash size={18} />
            </span>
            Remover
          </button>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeePreviewContainer>
  )
}
