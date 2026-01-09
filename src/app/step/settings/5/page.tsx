import DatasetOverviewCards from "@/component/infoCard";




const SchemaPage : React.FC= ()=>{
    return(
     <DatasetOverviewCards
  dataType={{
    name: "iris7777",
    type: "5.1",
  }}
  dataSource={{
    type: "Local",
  }}
  fileSelection={{
    uploadPath:
      "azureml://subscriptions/e71210a3-89de-498f-a2d4-257cdf439271",
  }}
  storage={{
    datastoreType: "Azure Blob",
  }}
  schema={[
    { name: "Sepal.length", type: "Decimal" },
    { name: "Sepal.width", type: "Decimal" },
  ]}
/>


    )
}
export default SchemaPage;