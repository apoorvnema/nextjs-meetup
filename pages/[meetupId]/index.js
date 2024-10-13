import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
  return (
    <MeetupDetail img={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description}/>
  )
}

export const getStaticPaths = async () => {
    const sampleMeetups = ['m1','m2','m3'];

    const paths = sampleMeetups.map((meetup) => ({
        params: {meetupId: meetup}
    }))
    return {
        fallback: false,
        paths
    }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
                title: 'Tech Conference 2024',
                address: '1234 Silicon Valley, CA, USA',
                description: '1234 Silicon Valley, CA, USA'
            }
        }
    }
}

export default MeetupDetails