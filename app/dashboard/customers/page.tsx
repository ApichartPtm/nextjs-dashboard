import React from 'react'

interface Customer {
  id: number;
  name: string;
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const customer: Customer[] = await res.json()

  return (
    <div>
      <ul>
        {customer.map(cus => <li key={cus.id}>{cus.name}</li>)}
      </ul>
    </div>
  )
}

export default page