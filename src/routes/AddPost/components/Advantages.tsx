import FormCheckboxIcon from "../../../components/form/FormCheckboxIcon"
import { ICat } from "../AddPost"

import form from '../form.module.scss'

const OPTIONS_ADVANTAGES = {
  wifi: 'Wi-Fi',
  tv: 'Телевизор',
  kitchen: 'Кухня',
  washingMachine: 'Стиральная машина',
  parking: 'Бесплатная парковка на территории',
  conditioner: 'Кондиционер',
  workspace: 'Рабочая зона',
} as ICat

const OPTIONS_SPECIAL = {
  pool: 'Бассейн',
  jacuzzi: 'Джакузи',
  courtyard: 'Внутренний двор',
  barbecue: 'Зона барбекю',
  outdoorDiningArea: 'Обеденная зона на улице',
  campfire: 'Костровище',
  fireplace: 'Камин',
  piano: 'Пианино',
  simulators: 'Тренажеры',
  sea: 'Выход к морю',
  beach: 'Выход на пляж',
} as ICat

const OPTIONS_SAFETY = {
  smokeDetector: 'Датчик дыма',
  medicine: 'Аптечка',
  extinguisher: 'Огнетушитель',
  sensorCO: 'Датчик угарного газа',
} as ICat

const Advantages = () => {
  const keys = Object.keys(OPTIONS_ADVANTAGES)
  const special = Object.keys(OPTIONS_SPECIAL)
  const safety = Object.keys(OPTIONS_SAFETY)

  return (
    <div className={form.advantages}>
      <div className={form.title}>
        <legend className={form.legend}>
          Расскажите гостям о преимуществах вашего жилья
        </legend>
        <span className={form.description}>
          Добавить другие удобства можно после публикации объявления.
        </span>
      </div>
      <div className={form.items}>
        {keys.map((key: string) => (
          <FormCheckboxIcon key={key} name={`advantages.${key}`} label={OPTIONS_ADVANTAGES[key]} icon={key}/>
        ))}
      </div>
      <h2>
        Есть ли у вас что-то особенное?
      </h2>
      <div className={form.items}>
        {special.map((key: string) => (
          <FormCheckboxIcon key={key} name={`advantages.${key}`} label={OPTIONS_SPECIAL[key]} icon={key}/>
        ))}
      </div>
      <h2>
        Отметьте средства безопасности
      </h2>
      <div className={form.items}>
        {safety.map((key: string) => (
          <FormCheckboxIcon key={key} name={`advantages.${key}`} label={OPTIONS_SAFETY[key]} icon={key}/>
        ))}
      </div>
    </div>
    )
}

export default Advantages
