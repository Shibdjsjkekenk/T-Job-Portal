import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; // Rows per page

  // Calculate the indices for slicing the data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = allAppliedJobs.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(allAppliedJobs.length / rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                You haven't applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            currentRows.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob?.createdAt?.split('T')[0]}</TableCell>
                <TableCell>{appliedJob.job?.title}</TableCell>
                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === 'rejected'
                        ? 'bg-red-400'
                        : appliedJob.status === 'pending'
                        ? 'bg-gray-400'
                        : 'bg-green-400'
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <nav className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded btn-pagination ${
              currentPage === 1
                ? 'text-gray-300 border-gray-300 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100 border-gray-400'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded border-pgn ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded btn-pagination ${
              currentPage === totalPages
                ? 'text-gray-300 border-gray-300 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100 border-gray-400'
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AppliedJobTable;
