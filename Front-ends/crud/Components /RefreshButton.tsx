import React from 'react';
const RefreshButton = ({ refetch }) => {
return (
<button
className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
onClick={() => refetch()}
>
Refresh
</button>
);
};
export default RefreshButton;