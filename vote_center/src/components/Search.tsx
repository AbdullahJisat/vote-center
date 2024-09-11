import React, {useCallback, useState} from 'react';
interface SearchInputProps {
    onSearch: (query: string, stay: string) => void;
}

const Search: React.FC<SearchInputProps> = ({ onSearch, options }) => {
    const [query, setQuery] = useState('');
    const [stay, setStay] = useState('');

    const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        onSearch(event.target.value)
    }, [onSearch]);

    const handleStay = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStay(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query, stay);
    };

    const handleClear = () =>{
        setQuery("")
        setStay("")
        onSearch('', '');
    }
    return (
        <div className="card-tools">
            <form onSubmit={handleSubmit}>

                <select className="form-control" name="stay" onChange={handleStay}>
                    <option value="">Select</option>
                    {options}
                </select>
                &nbsp;
            <div
                className="input-group input-group-sm"
                style={{width: "150px"}}
            >
                <input
                    type="text"
                    name="search"
                    className="form-control float-right"
                    placeholder="Search"
                    value={query}
                    onInput={handleSearch}
                />

                <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                        <i className="fas fa-search"></i>
                    </button>
                    <button type="button" className="btn btn-default" onClick={handleClear}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Search;
