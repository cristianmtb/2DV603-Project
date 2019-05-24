export function createFormData(data: any)
{
  const formData = new FormData();
  formatData(formData, data);
  return formData;
}
function formatData(formData: FormData, data: any)
{
  Object.keys(data).forEach(k =>
  {
    if ((data[k] !== '') && (data[k] !== null))
    {
      if (Array.isArray(data[k]))
      {
        for (let i = 0; i < data[k].length; i++)
        {
          formData.append(k + '[' + (i + 1) + '][id]', data[k][i]);
        }
      } else if (typeof data[k] === 'object')
      {
        formData.append(k, data[k]);
      } else
      {
        formData.append(k, data[k]);
      }
    }
  });
}