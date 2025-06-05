import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import PageBreadcrumb from 'src/components/PageBreadcrumb';

/**
 * The Office header.
 */
function OfficeHeader() {
    return (
        <div className="flex grow-0 flex-1 w-full items-center justify-between space-y-2 sm:space-y-0 py-6 sm:py-8">
            <motion.span
                initial={{ x: -20 }}
                animate={{
                    x: 0,
                    transition: { delay: 0.2 }
                }}
            >
                <div>
                    <PageBreadcrumb className="mb-2" />
                    <Typography className="flex text-4xl font-extrabold leading-none tracking-tight">Offices</Typography>
                </div>
            </motion.span>

            <div className="flex w-full sm:w-auto flex-1 items-center justify-end space-x-2" />
        </div>
    );
}

export default OfficeHeader;
