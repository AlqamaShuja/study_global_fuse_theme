import GlobalStyles from '@mui/material/GlobalStyles';
import OfficeHeader from './OfficeHeader';
import OfficeTable from './OfficeTable';
// import OfficeTable from './OfficeTable';


/**
 * The office page.
 */
function Office() {
    return (
        <>
            <GlobalStyles
                styles={() => ({
                    '#root': {
                        maxHeight: '100vh'
                    }
                })}
            />
            <div className="w-full h-full flex flex-col px-4">
                <OfficeHeader />
                <OfficeTable />
            </div>
        </>
    );
}

export default Office;
