import MeetupList from "../components/meetups/MeetupList";

import React from 'react'

const HomePage = (props) => {

  return (
    <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps() {
  const sampleMeetups = [
    {
      id: 'm1',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      title: 'Tech Conference 2024',
      address: '1234 Silicon Valley, CA, USA',
    },
    {
      id: 'm2',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
      title: 'AI and Robotics Expo',
      address: '5678 Innovation Park, NY, USA',
    },
    {
      id: 'm3',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
      title: 'Next.js Developer Meetup',
      address: '91011 Dev Plaza, SF, USA',
    },
  ];
  return {
    props: {
      meetups: sampleMeetups
    },
    revalidate: 1
  }
}

export default HomePage