import { useFormStore } from "@/lib/store/formStore"
const Preview = () => {
    const Fields = useFormStore((state) => state.fields)
  const formName=useFormStore((state)=>state.formName)
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Preview: {formName}</h2>

    </div>
  )
}

export default Preview
