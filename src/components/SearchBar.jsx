import React from 'react'
import { Search, X } from 'lucide-react'

const SearchBar = ({ value, onChange, placeholder = 'Search...', onClear }) => {
  return (
    <div className="relative">
      <Search size={18} className="absolute left-4 top-3.5 text-neutral-400" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field pl-12 pr-12"
      />
      {value && (
        <button
          onClick={() => {
            onChange({ target: { value: '' } })
            if (onClear) onClear()
          }}
          className="absolute right-4 top-3.5 text-neutral-400 hover:text-neutral-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  )
}

export default SearchBar
