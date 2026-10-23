import React from "react";
import { Button, Spinner } from "@patternfly/react-core";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@patternfly/react-table";

export function UserTable({ users, loading, error, onDelete }) {
  if (loading) return <Spinner aria-label="Loading users" />;
  if (error) return <div>{error.toString()}</div>;

  return (
    <Table aria-label="Users">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td dataLabel="Name">{user.name}</Td>
            <Td dataLabel="Email">{user.email}</Td>
            <Td dataLabel="Actions">
              <Button
                variant="danger"
                onClick={() => onDelete(user.id)}
              >
                Delete user
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
