import { useMemo, useState } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/data-table/DataTable';
import { ListItemIcon, MenuItem, Paper, Chip } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@fuse/core/Link';

// Static demo data for offices
const staticOfficeData = [
  {
    id: '1',
    officeCode: 'NYC-001',
    officeName: 'New York Headquarters',
    manager: {
      firstName: 'John',
      lastName: 'Mitchell',
    },
    location: {
      city: 'New York',
      state: 'NY',
      country: 'USA',
    },
    employeeCount: 245,
    capacity: 300,
    status: 'active',
    establishedDate: '2020-01-15',
    monthlyRent: 25000,
  },
  {
    id: '2',
    officeCode: 'LA-002',
    officeName: 'Los Angeles Branch',
    manager: {
      firstName: 'Sarah',
      lastName: 'Chen',
    },
    location: {
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    },
    employeeCount: 180,
    capacity: 220,
    status: 'active',
    establishedDate: '2021-03-10',
    monthlyRent: 22000,
  },
  {
    id: '3',
    officeCode: 'CHI-003',
    officeName: 'Chicago Regional Office',
    manager: {
      firstName: 'Michael',
      lastName: 'Rodriguez',
    },
    location: {
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
    },
    employeeCount: 95,
    capacity: 150,
    status: 'active',
    establishedDate: '2019-08-22',
    monthlyRent: 18000,
  },
  {
    id: '4',
    officeCode: 'MIA-004',
    officeName: 'Miami Sales Office',
    manager: {
      firstName: 'Emily',
      lastName: 'Johnson',
    },
    location: {
      city: 'Miami',
      state: 'FL',
      country: 'USA',
    },
    employeeCount: 67,
    capacity: 100,
    status: 'active',
    establishedDate: '2022-01-05',
    monthlyRent: 15000,
  },
  {
    id: '5',
    officeCode: 'SEA-005',
    officeName: 'Seattle Tech Hub',
    manager: {
      firstName: 'David',
      lastName: 'Kim',
    },
    location: {
      city: 'Seattle',
      state: 'WA',
      country: 'USA',
    },
    employeeCount: 320,
    capacity: 400,
    status: 'active',
    establishedDate: '2018-05-12',
    monthlyRent: 28000,
  },
  {
    id: '6',
    officeCode: 'ATL-006',
    officeName: 'Atlanta Operations Center',
    manager: {
      firstName: 'Lisa',
      lastName: 'Thompson',
    },
    location: {
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
    },
    employeeCount: 0,
    capacity: 200,
    status: 'closed',
    establishedDate: '2020-11-30',
    monthlyRent: 16000,
  },
  {
    id: '7',
    officeCode: 'DEN-007',
    officeName: 'Denver Support Center',
    manager: {
      firstName: 'Robert',
      lastName: 'Wilson',
    },
    location: {
      city: 'Denver',
      state: 'CO',
      country: 'USA',
    },
    employeeCount: 45,
    capacity: 80,
    status: 'under_renovation',
    establishedDate: '2023-02-14',
    monthlyRent: 12000,
  },
  {
    id: '8',
    officeCode: 'BOS-008',
    officeName: 'Boston Research Lab',
    manager: {
      firstName: 'Jennifer',
      lastName: 'Davis',
    },
    location: {
      city: 'Boston',
      state: 'MA',
      country: 'USA',
    },
    employeeCount: 128,
    capacity: 150,
    status: 'active',
    establishedDate: '2019-09-18',
    monthlyRent: 20000,
  },
  {
    id: '9',
    officeCode: 'PHX-009',
    officeName: 'Phoenix Distribution Center',
    manager: {
      firstName: 'Christopher',
      lastName: 'Martinez',
    },
    location: {
      city: 'Phoenix',
      state: 'AZ',
      country: 'USA',
    },
    employeeCount: 85,
    capacity: 120,
    status: 'active',
    establishedDate: '2021-07-08',
    monthlyRent: 14000,
  },
  {
    id: '10',
    officeCode: 'POR-010',
    officeName: 'Portland Innovation Hub',
    manager: {
      firstName: 'Amanda',
      lastName: 'Garcia',
    },
    location: {
      city: 'Portland',
      state: 'OR',
      country: 'USA',
    },
    employeeCount: 156,
    capacity: 180,
    status: 'active',
    establishedDate: '2020-12-03',
    monthlyRent: 17500,
  },
];

// Type definition for office
export interface Office {
  id: string;
  officeCode: string;
  officeName: string;
  manager: {
    firstName: string;
    lastName: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  employeeCount: number;
  capacity: number;
  status: string;
  establishedDate: string;
  monthlyRent: number;
}

// Office Status Component
const OfficeStatus = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'closed':
        return 'error';
      case 'under_renovation':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'closed':
        return 'Closed';
      case 'under_renovation':
        return 'Under Renovation';
      default:
        return status;
    }
  };

  return (
    <Chip
      label={getStatusLabel(status)}
      color={getStatusColor(status)}
      size='small'
      variant='filled'
    />
  );
};

function OfficeTable() {
  // Use state to manage the static data (allows for deletion functionality)
  const [offices, setOffices] = useState<Office[]>(staticOfficeData);

  // Function to remove offices (simulates the mutation)
  const removeOffices = (officeIds: string[]) => {
    setOffices((prevOffices) =>
      prevOffices.filter((office) => !officeIds.includes(office.id))
    );
  };

  const columns = useMemo<MRT_ColumnDef<Office>[]>(
    () => [
      {
        accessorKey: 'officeCode',
        header: 'Office Code',
        size: 120,
        Cell: ({ row }) => (
          <Typography
            component={Link}
            to={`/apps/offices/${row.original.id}`}
            role='button'
          >
            <u>{row.original.officeCode}</u>
          </Typography>
        ),
      },
      {
        accessorKey: 'officeName',
        header: 'Office Name',
        size: 200,
      },
      {
        id: 'manager',
        accessorFn: (row) => `${row.manager.firstName} ${row.manager.lastName}`,
        header: 'Manager',
        size: 150,
      },
      {
        id: 'location',
        accessorFn: (row) => `${row.location.city}, ${row.location.state}`,
        header: 'Location',
        size: 150,
      },
      {
        id: 'occupancy',
        accessorFn: (row) => `${row.employeeCount}/${row.capacity}`,
        header: 'Occupancy',
        size: 100,
        Cell: ({ row }) => {
          const percentage =
            (row.original.employeeCount / row.original.capacity) * 100;
          return (
            <div className='flex flex-col'>
              <span>
                {row.original.employeeCount}/{row.original.capacity}
              </span>
              <span className='text-sm text-gray-500'>
                ({percentage.toFixed(0)}%)
              </span>
            </div>
          );
        },
      },
      {
        id: 'monthlyRent',
        accessorFn: (row) => `$${row.monthlyRent.toLocaleString()}`,
        header: 'Monthly Rent',
        size: 120,
      },
      {
        id: 'status',
        accessorFn: (row) => <OfficeStatus status={row.status} />,
        accessorKey: 'status',
        header: 'Status',
        size: 120,
      },
      {
        accessorKey: 'establishedDate',
        header: 'Established',
        size: 120,
        Cell: ({ cell }) =>
          new Date(cell.getValue() as string).toLocaleDateString(),
      },
    ],
    []
  );

  return (
    <Paper
      className='flex flex-col flex-auto shadow-1 rounded-t-lg overflow-hidden rounded-b-none w-full h-full'
      elevation={0}
    >
      <DataTable
        initialState={{
          density: 'spacious',
          showColumnFilters: false,
          showGlobalFilter: true,
          columnPinning: {
            left: ['mrt-row-expand', 'mrt-row-select'],
            right: ['mrt-row-actions'],
          },
          pagination: {
            pageIndex: 0,
            pageSize: 20,
          },
        }}
        data={offices}
        columns={columns}
        renderRowActionMenuItems={({ closeMenu, row, table }) => [
          <MenuItem
            key={0}
            onClick={() => {
              removeOffices([row.original.id]);
              closeMenu();
              table.resetRowSelection();
            }}
          >
            <ListItemIcon>
              <FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
            </ListItemIcon>
            Delete
          </MenuItem>,
        ]}
        renderTopToolbarCustomActions={({ table }) => {
          const { rowSelection } = table.getState();

          if (Object.keys(rowSelection).length === 0) {
            return null;
          }

          return (
            <Button
              variant='contained'
              size='small'
              onClick={() => {
                const selectedRows = table.getSelectedRowModel().rows;
                removeOffices(selectedRows.map((row) => row.original.id));
                table.resetRowSelection();
              }}
              className='flex shrink min-w-9 ltr:mr-2 rtl:ml-2'
              color='secondary'
            >
              <FuseSvgIcon size={16}>heroicons-outline:trash</FuseSvgIcon>
              <span className='hidden sm:flex mx-2'>
                Delete selected offices
              </span>
            </Button>
          );
        }}
      />
    </Paper>
  );
}

export default OfficeTable;
