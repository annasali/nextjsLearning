import Link from 'next/link';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../component/events/event-list'

function HomePage() {
    const featuredEvent = getFeaturedEvents();
    return (
        <div>
            <h1>The Home Page</h1>
            <EventList items={featuredEvent}/>
        </div>
    )
}

export default HomePage;