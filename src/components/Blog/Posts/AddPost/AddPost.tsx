import { FormApi } from 'final-form';
import { Form } from 'react-final-form';
import { addPostRedux, NewPost } from '../../../../store/slices/posts';
import { useAppDispatch } from '../../../../utils/hooks';
import FormButton from '../../../form/FormButton';
import FormField from '../../../form/FormField';
import FormSelect from '../../../form/FormSelect';

const OPTIONS = {
  House: 'House',
  Apartment: 'Apartment',
  Room: 'Room'
}

const AddPost = () => {
  const dispatch = useAppDispatch()

  return (
    <Form
      onSubmit={ (data: NewPost, form: FormApi<NewPost, string>) => {
        dispatch(addPostRedux(data))
        form.reset()
      }  }
      render={function NewItemForm({handleSubmit}) {
        return (
          <form onSubmit={handleSubmit}>
            <FormSelect name={'title'} required options={OPTIONS} />
            <FormField name='description' required />
            <FormButton />
          </form>
        )
      }}
    ></Form>

  )
}

export default AddPost
