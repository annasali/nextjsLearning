import Link from 'next/link'
function  clientPage() {
    const clients = [
        {id: 'max', name: 'Maximian'},
        {id: 'manu', name: 'Manuel'},
    ]
    return(
        <div>
            <h1>The Client Page</h1>
            <ul>
                {clients.map(client => <li key= {client.id}>
                    <Link href={{
                        pathname: '/client/[id]',
                        query:  {id : client.id }
                        }}>{client.name}</Link>
                </li>)}
            </ul>
        </div>
    );
}

export default clientPage