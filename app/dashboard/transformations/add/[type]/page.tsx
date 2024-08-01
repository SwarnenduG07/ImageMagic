import Header from '@/components/Header'
import TransformationForm from '@/components/TransformationForm'
import { transformationTypes } from '@/constants'

const AddTransformationPage = ({params: {type}}: SearchParamProps) => {
 
  const transformation = transformationTypes[type]

  return (
    <>
       <Header 
         title={transformation.title}
         subtitle={transformation.subTitle}
       />
         <TransformationForm />
    </> 
  )
}

export default AddTransformationPage