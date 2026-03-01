import { content } from "../../content/content";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";

export function ParticipantsSection() {
    const { participants } = content;
    const { schedule } = participants;

    return (
        <Section id="participants" className="bg-[#f2edda]">
            <SectionTitle title={participants.title} />
            {/* Info cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#981a36]">{participants.heading}</h3>
                    {participants.paragraphs.map((p, i) => (
                        <p
                            key={i}
                            className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-[#2d1810]"
                            dangerouslySetInnerHTML={{ __html: p }}
                        />
                    ))}
                </div>
                <div className="bg-[#17789c] text-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h4 className="text-lg sm:text-xl font-bold mb-3 text-[#ffc50e]">{participants.benefitsTitle}</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                        {participants.benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Schedule + Bring List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8 sm:mt-12">
                {/* Schedule table */}
                <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#981a36]">Harmonogram</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Friday */}
                        <div>
                            <h4 className="text-base sm:text-lg font-bold mb-3 text-[#17789c]">{schedule.fridayLabel}</h4>
                            <div className="space-y-2">
                                {schedule.friday.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-sm font-bold text-[#981a36] w-14 flex-shrink-0 font-upheaval">{item.time}</span>
                                        <span className="text-sm sm:text-base text-[#2d1810]">{item.activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Saturday */}
                        <div>
                            <h4 className="text-base sm:text-lg font-bold mb-3 text-[#17789c]">{schedule.saturdayLabel}</h4>
                            <div className="space-y-2">
                                {schedule.saturday.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-sm font-bold text-[#981a36] w-14 flex-shrink-0 font-upheaval">{item.time}</span>
                                        <span className="text-sm sm:text-base text-[#2d1810]">{item.activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bring List */}
                <div className="bg-[#981a36] text-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#ffc50e]">{participants.bringListTitle}</h3>
                    <ul className="space-y-3 flex-1">
                        {participants.bringList.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm sm:text-base">
                                <span className="text-[#ffc50e] flex-shrink-0">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
