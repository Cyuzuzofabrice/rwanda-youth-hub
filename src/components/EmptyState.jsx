import React from 'react'

const EmptyState = ({ title, description, buttonText, onButtonClick, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {Icon && <Icon size={48} className="text-neutral-300 mb-4" />}
      <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-6 max-w-md">{description}</p>
      {buttonText && onButtonClick && (
        <button onClick={onButtonClick} className="btn-primary">
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default EmptyState
