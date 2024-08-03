"use client"
import { dataUrl, getImageSize } from '@/lib/utils'
import { useToast } from './ui/use-toast'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'

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
        setImage((prevState: any) => ({
            ...prevState,
            publicId: result?.info?.public_id,
            width: result?.info?.width,
            height: result?.info?.height,
            secureUrl: result?.info?.secure_url,
        }))

        onValueChange(result?.info?.public_id)
        toast({
            title: "Imagage uoloaded succesfully",
            description: " 1 cradit was deducted from your account",
            duration: 3000,
            className: "success-toast",

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
                 <div className='cursor-pointer overflow-hidden rounded-[10px]'>
                    <CldImage 
                    width={getImageSize(type, image, "width")}
                    height={getImageSize(type, image, "height")}
                    src={publicId}
                    alt="image"
                    sizes={'(max-widht: 767px) 100vw, 50vw'}
                    placeholder={dataUrl as PlaceholderValue}
                    className='media-uploader_cldImage'
                    />
                 </div>
                </>
                ) : (
            <div className='media-uploader_cta' onClick={() => open()}>
                <div className='media-uploader_cta-image'>
                     <Image 
                     src="/assets/icons/add.svg"
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