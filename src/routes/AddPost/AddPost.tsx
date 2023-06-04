import { Form } from 'react-final-form';
import { useAppDispatch } from '../../utils/hooks';
import FormButton from '../../components/form/FormButton';
import FormRadioIconGroup from '../../components/form/FormRadioIconGroup';
import FormRadioList from '../../components/form/FormRadioIconList';

import form from './form.module.scss'
import AboutHousing from './components/aboutHousing/AboutHousing';
import Advantages from './components/Advantages';
import FormTextArea from '../../components/form/FormTextArea';
import FormPriceCounterField from '../../components/form/FormPriceCounterField';

export type ICat = {
  [label: string]: string,
}

const OPTIONS = {
  house: 'Дом',
  apartment: 'Квартира',
  dome: 'Купольный дом',
  hotel: 'Гостиница',
  motorhome: 'Автодом',
} as ICat

const OPTIONS_K = {
  entire: { 'Жилье целиком': 'Все помещения полностью в распоряжении гостей.'},
  room: { 'Отдельная комната': 'Гости спят в своей комнате, но в остальных помещениях могут быть другие люди.'},
  hostel: {'Общая комната': 'Гости спят в общей комнате или помещении, где могут находиться другие люди.'}
}

type postData = {
  list: string,
  group: string,
}

const OPTIONS_COUNTER = [
  { guests: 'Гости',
    min: '1',
    max: '16',
    step: '1',
    initial: '4',
  },

  { bedroom: 'Спальни',
    min: '0',
    max: '50',
    step: '1',
    initial: '1',
  },

  { beds: 'Кровати',
    min: '1',
    max: '50',
    step: '1',
    initial: '1',
  },

  { bathrooms: 'Ванные',
    min: '0.5',
    max: '50',
    step: '0.5',
    initial: '1',
  }
] as ICat[]

const OPTIONS_PRICE =   {
  min: '900',
  max: '100000',
  step: '100',
  initial: '1234',
}

const AddPost = () => {
  const dispatch = useAppDispatch()

  return (
    <Form
      onSubmit={ (data: postData) => {
        // dispatch(addPostRedux(data))
        console.log(data)
      }  }
      render={function NewItemForm({handleSubmit}) {
        return (
          <form className={form.main} onSubmit={handleSubmit}>
            <fieldset>
              <legend className={form.legend}>
                Что из перечисленного точнее описывает ваше жилье?
              </legend>
              <FormRadioIconGroup name='housing' options={OPTIONS} />
            </fieldset>
            <fieldset>
              <legend className={form.legend}>
                Какой тип жилья будет в распоряжении гостей?
              </legend>
              <FormRadioList name={'typeHousing'} options={OPTIONS_K} />
            </fieldset>
            <fieldset>
              <AboutHousing options={OPTIONS_COUNTER} />
            </fieldset>
            <fieldset>
              <Advantages/>
            </fieldset>
            <fieldset>
              <div className={form.title}>
                <legend className={form.legend}>
                  Придумайте, как будет называться дом
                </legend>
                <span className={form.description}>
                  Краткое название — то, что нужно. Не беспокойтесь, вы всегда сможете отредактировать его.
                </span>
              </div>
              <FormTextArea name={'nameHouse'} className={form.nameHouse} type='textarea'/>
            </fieldset>
            <fieldset>
              <div className={form.title}>
                <legend className={form.legend}>
                  Составьте описание
                </legend>
                <span className={form.description}>
                  Расскажите, что делает ваше жилье особенным.
                </span>
              </div>
              <FormTextArea name={'description'} className={form.nameHouse} type='textarea'/>
            </fieldset>
            <fieldset>
              <div className={form.title}>
                <legend className={form.legend}>
                  Теперь установите цену
                </legend>
                <span className={form.description}>
                  Ее можно изменить в любое время.
                </span>
              </div>
              <FormPriceCounterField className={form.price} name={'price'} item={OPTIONS_PRICE} />
            </fieldset>
            <FormButton />
          </form>
        )
      }}
    />
  )
}

export default AddPost
