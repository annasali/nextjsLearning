import { useRouter } from "next/router";

function  ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        router.push({
            pathname: '/client/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid:'projecta'}
        })
    };

    return(
        <div>
            <h1>The Project of a given client</h1>
            <button onClick={loadProjectHandler}> load project A</button>
        </div>
    );
}

export default ClientProjectsPage