import React from 'react';

interface PaginationProps {
    voters: {
        links: {
            url: string;
            label: string;
            active?: boolean;
        }[];
    };
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({voters, onPageChange}) => {

    const handlePageChange = async (link: string) => {
        if (!link) return;  // Handle null or undefined links

        try {
            const url = new URL(link);
            const page = url.searchParams.get('page');
            if (page) {
                onPageChange(Number(page));
            }
        } catch (error) {
            console.error("Invalid URL", error);
        }
    };

    return (

        <ul className="pagination pagination-sm m-0 float-right">
            {voters?.links.map((link, index) => (
                <li key={index} className={`page-item ${link.active ? 'active' : ''}`}>
                    <a
                        className="page-link"
                        // style={link.active ? {background: "skyblue", color: "white"} : {}}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(link.url);
                        }}
                        href="#"
                    >
                        {link.label.replace('&laquo; Previous', '«').replace('Next &raquo;', '»')}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
