import Image from "next/image"
import { Button } from "./ui/button"
import { CldImage } from "next-cloudinary"
import { dataUrl, debounce, getImageSize } from "@/lib/utils"
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"

const TransformedImage = ({image,type,title,isTransforming,setIsTransforming,transformationConfig, hasDownload = true}:TransformedImageProps ) => {
    const downloadhandeler = () => {
         //TODO
    }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
          <h3 className="h3-bold text-dark-600">
              Transformed
          </h3>
          {hasDownload && (
            <Button className="download-btn transition ease-in-out delay-120 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 ..." onClick={downloadhandeler}>
                <Image 
                src="/assets/icons/download.svg"
                alt="Download"
                height={24}
                width={24}
                className="pb-[6px]"/>
            </Button>
          )}
      </div>
      {image?.publicId && transformationConfig ? (
        <div className="relative">
            <CldImage 
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={image?.publicId}
                  alt="image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="teansformed-image"
                  onLoad={() =>{setIsTransforming && setIsTransforming(false)}}
                  onError={() => {
                    debounce(() => {
                        (false)
                    },8000)
                  }}
                  {...transformationConfig}
                />
                {isTransforming && (
                    <div className="transforming-loader">
                       <Image
                       src="/assets/icons/spiner.svg"
                       alt="Transforming"
                       width={50}
                       height={50}
                       />
                    </div>
                )}
        </div>
      ): (
        <div className="transformed-placeholder">
          Transformed Image
        </div>
      )}
    </div>
  )
}

export default TransformedImage