"use client"
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduledMeetingList from './_components/ScheduledMeetingList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { app } from '@/config/FirebaseConfig';
import { format } from 'date-fns';

function ScheduledMeeting() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [meetingList, setMeetingList] = useState([]);

    useEffect(() => {
        user && getScheduledMeetings();
    }, [user]);

    const getScheduledMeetings = async () => {
        setMeetingList([]);
        const q = query(collection(db, 'ScheduledMeetings'), where('businessEmail', '==', user.email));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => {
            setMeetingList(prev => [...prev, doc.data()]);
        });
    };

    const filterMeetingList = (type) => {
        if (type === 'upcoming') {
            return meetingList.filter(item => item.formatedTimeStamp >= format(new Date(), 't'));
        } else {
            return meetingList.filter(item => item.formatedTimeStamp < format(new Date(), 't'));
        }
    };

    return (
        <div className='p-10'>
            <h2 className='font-bold text-2xl'>Scheduled Meetings</h2>
            <hr className='my-5' />
            <div className="max-w-screen-lg mx-auto">
                <Tabs defaultValue="upcoming" className="sm:w-full md:w-[600px] lg:w-[800px] mx-auto">
                    <TabsList>
                        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        <TabsTrigger value="expired">Expired</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming">
                        <ScheduledMeetingList meetingList={filterMeetingList('upcoming')} />
                    </TabsContent>
                    <TabsContent value="expired">
                        <ScheduledMeetingList meetingList={filterMeetingList('expired')} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default ScheduledMeeting;
