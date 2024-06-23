import React, { useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


function PreviewMeeting({ formValue }) {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    formValue?.duration && createTimeSlot(formValue?.duration);
  }, [formValue]);
  /**
   * Used to create timeslots based on interval
   * @param {number} interval - Interval in minutes
   */
  const createTimeSlot = (interval) => {
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? 'PM' : 'AM';
      return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    });
    setTimeSlots(slots);
  };

  return (
    <div className='p-5 py-10 shadow-lg m-5 border-t-8' style={{ borderTopColor: formValue?.themeColor }}>
      <Image src='/logo.svg' alt='logo' width={150} height={150} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        {/* Meeting Info */}
        <div className='p-4 border-r'>
          <h2>Business Name</h2>
          <h2 className='font-bold text-3xl'>{formValue?.eventName ? formValue?.eventName : 'Meeting Name'}</h2>
          <div className='mt-5 flex flex-col gap-4'>
            <h2 className='flex gap-2'><Clock />{formValue?.duration} Min</h2>
            <h2 className='flex gap-2'><MapPin />{formValue?.locationType} Meeting</h2>
            <Link href={'#'} className='text-primary'>{formValue?.locationUrl}</Link>
          </div>
        </div>
        {/* Time & Date Selection */}
        <div className='md:col-span-2 flex flex-col px-4'>
          <h2 className='font-bold text-lg'>Select Date & Time</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border mt-4"
            disabled={(date) => date <= new Date()}
          />
          <div className='flex flex-col mt-4'>
            {timeSlots?.map((time, index) => (
              <Button key={index} className="w-full border-primary text-primary mt-2" variant="outline">
                {time}
                </Button>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMeeting;
