
import { useToast } from './ui/use-toast'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'

type MediaUploaderProps = {
    onValueChange: (value: string) => void
    setImage: React.Dispatch<any>
    publicId: string
    image: any
    type: string
}

const MediaUploader = ( {onValueChange, setImage, image, publicId,type}:MediaUploaderProps) => {
    const { toast } = useToast()
    const onUploadSuccesHandeler = (result:any) => {
        toast({
            title: "Imagage uoloaded succesfully",
            description: " 1 cradit was deducted from your account",
            duration: 3000,
            className: "error-toast",

        })
    }

    const onUploadErrorHandeler = () => {
        toast({
            title: "something went wrong while uploadeing",
            description: "Please try again",
            duration: 3000,
            className: "error-toast",

        })
    }
  return (
    <CldUploadWidget
    uploadPreset='jsm_IMAGE-Magic'
    options={{
        multiple: false,
        resourceType: "image",
    }}
    onSuccess={onUploadSuccesHandeler}
    onError={onUploadErrorHandeler}
    >
       {({open }) => (
        <div className='flex flex-col gap-4'>
            <h3 className='h3-bold text-dark-600'>
                Original
            </h3>
           {publicId ? (<>
                 HERE IS THE IMAGE
                </>
                ) : (
            <div className='media-uploader_cta' onClick={() => open()}>
                <div className='media-uploader_cta-image'>
                     <Image 
                     src="/assets/icon/add.svg"
                     alt="Add Image"
                     width={24}
                     height={24}
                     />
              
                </div>
                <p className='p-14-medium'>
                    Click Here to Upload Image
                </p>
            </div>
           ) }
        </div>
       )}
    </CldUploadWidget>
  )
}

export default MediaUploader