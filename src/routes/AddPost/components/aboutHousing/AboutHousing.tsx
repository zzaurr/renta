import FormCounter from '../../../../components/form/FormCounter'
import { ICat } from '../../AddPost'
import form from '../../form.module.scss'

type AboutHousingProps = {
  options: ICat[]
}

const AboutHousing = ({options}: AboutHousingProps) => (
    <div className={form.about}>
      <div className={form.title}>
        <legend className={form.legend}>
          Поделитесь основной информацией о жилье
        </legend>
        <span className={form.description}>
          Детали (например, типы кроватей) вы добавите позже.
        </span>
      </div>
      {options.map((key) => (
        <div key={Object.keys(key)[0]} className={form.itemCounter}>
          <legend>
            {Object.values(key)[0]}
          </legend>
          <FormCounter name={`about.${Object.keys(key)[0]}`} item={key}/>
        </div>
      ))}

    </div>
)

export default AboutHousing
