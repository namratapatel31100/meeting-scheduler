"use client"
import React, { useState } from 'react';
import MeetingForm from './_components/MeetingForm';
import PreviewMeeting from './_components/PreviewMeeting';

function CreateMeeting() {
    const [formValue, setFormValue] = useState();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Meeting Form */}
            <div className="shadow-md border">
                <MeetingForm setFormValue={(v) => setFormValue(v)} />
            </div>
            {/* Preview */}
            <div className="md:col-span-2">
                <PreviewMeeting formValue={formValue} />
            </div>

            {/* Mobile Small Screen Adjustment */}
            <style jsx>{`
                @media (max-width:844px) {
                    .grid-cols-1 {
                        grid-template-columns: 1fr;
                    }
                    .md\:col-span-2 {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </div>
    );
}

export default CreateMeeting;
