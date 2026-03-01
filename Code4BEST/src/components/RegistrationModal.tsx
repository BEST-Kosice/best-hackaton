import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { content } from "../content/content";

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type RegistrationView = "select" | "tuke" | "other";

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
    const [view, setView] = useState<RegistrationView>("select");

    const tukeUrl = content.links.registrationUrl;
    const generalUrl = content.links.googleRegistrationUrl;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Ensure we start at select view when opening
            setView("select");
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const renderContent = () => {
        switch (view) {
            case "select":
                return (
                    <div className="flex flex-col items-center justify-center min-h-full p-6 sm:p-8 text-center animate-[fadeIn_0.3s_ease-out]">
                        <h4 className="text-xl sm:text-2xl font-bold text-[#981a36] mb-8 font-upheaval">
                            VYBERTE SI TYP REGISTRÁCIE
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-lg">
                            {/* TUKE Option */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setView("tuke");
                                }}
                                className="flex flex-col items-center justify-center p-6 bg-[#981a36] text-white rounded-xl shadow-lg active:scale-95 sm:hover:scale-105 transition-all duration-300 group ring-4 ring-transparent sm:hover:ring-[#ffc50e] cursor-pointer"
                            >
                                <span className="text-3xl mb-2 font-upheaval group-hover:text-[#ffc50e]">TUKE</span>
                                <span className="text-sm font-medium opacity-80 uppercase tracking-tight">Študent technickej univerzity</span>
                            </button>

                            {/* OTHER Option */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setView("other");
                                }}
                                className="flex flex-col items-center justify-center p-6 bg-[#17789c] text-white rounded-xl shadow-lg active:scale-95 sm:hover:scale-105 transition-all duration-300 group ring-4 ring-transparent sm:hover:ring-[#ffc50e] cursor-pointer"
                            >
                                <span className="text-3xl mb-2 font-upheaval group-hover:text-[#ffc50e]">OTHER</span>
                                <span className="text-sm font-medium opacity-80 uppercase tracking-tight">Všeobecná registrácia</span>
                            </button>
                        </div>
                        <p className="mt-8 text-gray-400 text-xs sm:text-sm">
                            Na registráciu pre študentov TUKE je potrebný univerzitný e-mail.
                        </p>
                    </div>
                );
            case "tuke":
                return (
                    <div className="flex flex-col items-center justify-center min-h-full p-6 sm:p-8 text-center animate-[fadeIn_0.3s_ease-out]">
                        <div className="bg-white/50 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border-2 border-dashed border-[#981a36]/20 max-w-md w-full">
                            <div className="w-16 h-16 bg-[#981a36]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <h4 className="text-xl sm:text-2xl font-bold text-[#981a36] mb-4 font-upheaval">
                                TUKE REGISTRÁCIA
                            </h4>
                            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
                                Budete presmerovaní na Microsoft Forms. Pre vyplnenie je potrebné prihlásiť sa vaším univerzitným e-mailom (@student.tuke.sk).
                            </p>
                            <a
                                href={tukeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="inline-block w-full sm:w-auto px-8 py-4 bg-[#981a36] text-white font-bold rounded-xl shadow-lg hover:bg-[#7a152b] active:scale-95 transition-all font-upheaval text-lg"
                            >
                                OTVORIŤ FORMULÁR →
                            </a>
                            <p className="mt-6 text-gray-400 text-[10px] uppercase tracking-widest">
                                Otvorí sa v novom okne
                            </p>
                        </div>
                    </div>
                );
            case "other":
                return (
                    <div className="w-full h-full min-h-[400px] flex flex-col">
                        <iframe
                            src={generalUrl}
                            className="w-full flex-1 border-none bg-white"
                            title="Registračný formulár"
                            allowFullScreen
                        />
                    </div>
                );
        }
    };

    const modalMarkup = (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-10 overflow-hidden"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

            {/* Dialog */}
            <div
                className="relative w-full max-w-[980px] h-[85vh] sm:h-[80vh] min-h-[450px] max-h-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-[#981a36] px-4 py-3 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2">
                        {view !== "select" && (
                            <button
                                onClick={() => setView("select")}
                                className="text-white/80 hover:text-white flex items-center gap-1 text-sm font-bold uppercase font-upheaval mr-4"
                            >
                                ← Späť
                            </button>
                        )}
                        <h3 className="text-white text-base sm:text-lg font-bold font-upheaval truncate">
                            {view === "select" ? "REGISTRÁCIA" : view === "tuke" ? "TUKE REGISTRÁCIA" : "VŠEOBECNÁ REGISTRÁCIA"}
                        </h3>
                    </div>
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xl font-bold cursor-pointer"
                        aria-label="Zavrieť"
                    >
                        ×
                    </button>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-auto bg-[#f2edda] relative">
                    {renderContent()}
                </div>
            </div>
        </div>
    );

    return createPortal(modalMarkup, document.body);
}

