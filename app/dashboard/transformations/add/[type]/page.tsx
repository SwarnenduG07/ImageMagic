// import Header from '@/components/Header'
// import TransformationForm from '@/components/TransformationForm'
// import { transformationTypes } from '@/constants'
// import { getUserById } from '@/lib/actions/user.actions'
// import { auth } from '@clerk/nextjs/server'

// import { redirect } from 'next/navigation'

// const AddTransformationPage =  async ({params: {type}}: SearchParamProps) => {
//    const { userId } = auth()
//   const transformation = transformationTypes[type];
//     if(!userId) redirect('/sign-in')
  
//   const user = await getUserById(userId)

//   return (
//     <>
//        <Header 
//          title={transformation.title}
//          subtitle={transformation.subTitle}
//        />
//          <TransformationForm  action='Add' userId={user._id}
//          type={transformation.type as TransformationTypeKey}
//          creditBalance={user.creditBalance}
//          />
//     </> 
//   )
// }

// export default AddTransformationPage
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page