'use client'
import useSWR from "swr"
import Select from "react-select"
const fetchModels = () => fetch('api/getEngines').then(res => res.json())

function ModelSelection() {
    const {data: models, isLoading} = useSWR('models', fetchModels)
    const {data: model, mutate: setModal} = useSWR('model', {
        fallbackData: 'text-davinici-003'
    })

  return (
    <div className="mt-2">
        <Select 
            className="mt-2"
            options={models?.modelOptions}
            defaultValue={model}
            placeholder={model}
            isSearchable 
            isLoading = {isLoading}
            menuPosition = 'fixed'
            classNames={{control: (state: any) => "bg-[#434654] border-[#434654] text-white"}}
            onChange={(e: any) => (e.value)}
            />
    </div>
  )
}

export default ModelSelection