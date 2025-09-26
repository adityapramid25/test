import React from 'react';

interface PrayerCardProps {
  icon: JSX.Element;
  name: string;
  time: string;
  isNext?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const PrayerCard: React.FC<PrayerCardProps> = ({
    icon,
    name,
    time,
    isNext = false,
    isSelected = false,
    onClick
}) => {
    const buttonClasses = [
        "w-full",
        "rounded-lg",
        "transition-all duration-300",
        "border",
        "relative",
        "aspect-square",
        "flex flex-col items-center justify-center",
        "p-4",
        "text-center",
        "cursor-pointer",
        "hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500"
    ];

    if (isSelected) {
        buttonClasses.push(
            "bg-green-800/60",
            "border-green-400",
            "ring-2 ring-offset-2 ring-offset-gray-900 ring-green-400",
            "shadow-lg shadow-green-500/20",
            "scale-105"
        );
    } else {
        buttonClasses.push(
            "bg-gray-800/50",
            "border-gray-700/50"
        );
    }

    const wrapperClasses = ["relative"];
    // Use padding-top to create space for the badge so grid alignment is not broken
    if (isNext) {
        wrapperClasses.push("pt-4");
    }

    return (
        <div className={wrapperClasses.join(' ')}>
             {isNext && (
                <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 text-xs bg-green-400 text-gray-900 font-bold px-2 py-0.5 rounded-full z-10"
                    aria-label="Next prayer time"
                >
                    BERIKUTNYA
                </div>
            )}
            <button onClick={onClick} className={buttonClasses.join(' ')} aria-pressed={isSelected}>
                <div className="scale-125 mb-3">{icon}</div>
                <span className="text-lg text-gray-200 font-semibold">{name}</span>
                <span className="text-2xl font-bold text-green-300 tracking-wider font-mono mt-1">
                    {time}
                </span>
            </button>
        </div>
    );
};

export default PrayerCard;
