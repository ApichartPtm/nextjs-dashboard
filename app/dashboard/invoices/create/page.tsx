import From from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'

const page = async () => {
  const customers = await fetchCustomers()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Invoices',
            href: '/dashboard/invoices'
          },
          {
            label: 'Create Invoice',
            href: '/dashboard/create',
            active: true
          }
        ]}
      />
      <From customers={customers} />
    </main>
  )
}

export default page