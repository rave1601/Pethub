import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector = ({ compact = false, variant = 'default' }) => {
  const { currentLang, setLanguage, supportedLanguages, currentLanguageMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`lang-selector-wrapper ${variant}`} ref={dropdownRef}>
      <button
        type="button"
        className={`lang-selector-btn ${compact ? 'compact' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        aria-expanded={isOpen}
        id="language-selector-button"
      >
        <span className="lang-flag">{currentLanguageMeta.flag}</span>
        {!compact && <span className="lang-code">{currentLanguageMeta.name}</span>}
        <ChevronDown size={14} className={`lang-chevron ${isOpen ? 'rotated' : ''}`} />
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu" role="menu">
          <div className="lang-dropdown-header">
            <Globe size={14} color="var(--primary)" />
            <span>Select Language / भाषा / Idioma</span>
          </div>

          <div className="lang-options-list">
            {supportedLanguages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-option-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  role="menuitem"
                  id={`lang-option-${lang.code}`}
                >
                  <span className="lang-item-flag">{lang.flag}</span>
                  <div className="lang-item-labels">
                    <span className="lang-item-native">{lang.nativeName}</span>
                    <span className="lang-item-en">{lang.name}</span>
                  </div>
                  {isSelected && (
                    <span className="lang-check-icon">
                      <Check size={16} color="var(--primary)" strokeWidth={2.5} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
