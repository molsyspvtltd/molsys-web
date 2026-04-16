import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";

// ===================================
// STYLED COMPONENTS
// ===================================

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 80px auto 40px;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    margin: 70px auto 30px;
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    margin: 60px auto 20px;
    padding: 20px 12px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e7eb;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  h1 {
    font-size: 2rem;
    color: #1f2937;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }

    svg {
      font-size: 2rem;
      color: #3b82f6;
    }
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  text-align: center;

  h3 {
    color: #6b7280;
    font-size: 0.9rem;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .value {
    font-size: 2.5rem;
    color: #3b82f6;
    font-weight: 800;
  }
`;

const SearchSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  @media (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;

  thead {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-bottom: 2px solid #e5e7eb;
  }

  th {
    padding: 16px;
    text-align: left;
    font-weight: 700;
    color: #1f2937;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      padding: 12px;
      font-size: 0.75rem;
    }
  }

  td {
    padding: 16px;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      padding: 12px;
      font-size: 0.85rem;
    }
  }

  tbody tr {
    transition: background-color 0.3s ease;

    &:hover {
      background: #f9fafb;
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
    text-decoration: none;
    color: #ffffff;
  }

  svg {
    font-size: 0.9rem;
  }
`;

const NoFile = styled.span`
  color: #9ca3af;
  font-size: 0.85rem;
  font-style: italic;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 60px 20px;

  p {
    color: #6b7280;
    font-size: 1.1rem;
  }
`;

const ErrorContainer = styled.div`
  background: #fee2e2;
  border: 1px solid #fca5a5;
  padding: 16px;
  border-radius: 8px;
  color: #991b1b;
  margin-bottom: 20px;

  strong {
    display: block;
    margin-bottom: 8px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;

  svg {
    font-size: 4rem;
    color: #d1d5db;
    margin-bottom: 16px;
  }

  h3 {
    color: #6b7280;
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    color: #9ca3af;
    margin: 8px 0 0 0;
  }
`;

// ===================================
// MAIN COMPONENT
// ===================================

const API_URL = "https://internship-backend-t60m.onrender.com";
const ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY || "supersecret123";

function AdminDashboard() {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch applications on mount
  useEffect(() => {
    fetchApplications();
  }, []);

  // Filter and sort applications
  useEffect(() => {
    let filtered = [...applications];

    // Search filter
    if (search.trim()) {
      filtered = filtered.filter(
        (app) =>
          app.fullName.toLowerCase().includes(search.toLowerCase()) ||
          app.email.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Role filter
    if (roleFilter !== "all") {
      filtered = filtered.filter((app) => app.roleApplying === roleFilter);
    }

    // Sort
    if (sortBy === "latest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }

    setFilteredApps(filtered);
  }, [search, sortBy, roleFilter, applications]);

  const fetchApplications = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/applications`, {
        headers: {
          "x-admin-key": ADMIN_KEY,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.error || `Failed to fetch: ${res.statusText}`,
        );
      }

      const data = await res.json();
      setApplications(data.applications || []);
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError(err.message || "Failed to load applications. Check admin key.");
    } finally {
      setLoading(false);
    }
  };

  const getRoleColor = (role) => {
    const colors = {
      "genome-informatics": "#10b981",
      "ai-ml": "#8b5cf6",
      frontend: "#3b82f6",
      backend: "#f59e0b",
    };
    return colors[role] || "#6b7280";
  };

  // ===================================
  // RENDER
  // ===================================

  if (loading) {
    return (
      <DashboardContainer>
        <LoadingContainer>
          <p>📊 Loading applications...</p>
        </LoadingContainer>
      </DashboardContainer>
    );
  }

  const totalApplications = applications.length;
  const roles = [
    ...new Set(applications.map((app) => app.roleApplying)),
  ].filter(Boolean);

  return (
    <DashboardContainer>
      {/* HEADER */}
      <Header>
        <h1>
          <Icon.FileText /> Admin Dashboard
        </h1>
        <div style={{ color: "#6b7280", fontSize: "0.9rem" }}>
          Last updated: {new Date().toLocaleString()}
        </div>
      </Header>

      {/* STATS */}
      <Stats>
        <StatCard>
          <h3>Total Applications</h3>
          <div className="value">{totalApplications}</div>
        </StatCard>
        <StatCard>
          <h3>This Month</h3>
          <div className="value">
            {
              applications.filter((app) => {
                const appDate = new Date(app.createdAt);
                const now = new Date();
                return (
                  appDate.getMonth() === now.getMonth() &&
                  appDate.getFullYear() === now.getFullYear()
                );
              }).length
            }
          </div>
        </StatCard>
        <StatCard>
          <h3>Unique Roles</h3>
          <div className="value">{roles.length}</div>
        </StatCard>
      </Stats>

      {/* ERROR MESSAGE */}
      {error && (
        <ErrorContainer>
          <strong>⚠️ Error</strong>
          {error}
        </ErrorContainer>
      )}

      {/* FILTERS */}
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="🔍 Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role === "genome-informatics"
                ? "🧬 Genome-informatics"
                : role === "ai-ml"
                  ? "🤖 AI/ML"
                  : role === "frontend"
                    ? "🎨 Frontend"
                    : "⚙️ Backend"}
            </option>
          ))}
        </Select>

        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">A-Z Name</option>
        </Select>

        <button
          onClick={fetchApplications}
          style={{
            padding: "12px 24px",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 5px 15px rgba(59, 130, 246, 0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          <Icon.ArrowClockwise /> Refresh
        </button>
      </SearchSection>

      {/* TABLE */}
      {filteredApps.length === 0 ? (
        <EmptyState>
          <Icon.FileEarmarkX />
          <h3>No applications found</h3>
          <p>
            {search || roleFilter !== "all"
              ? "Try adjusting your filters"
              : "No internship applications yet"}
          </p>
        </EmptyState>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Resume</th>
                <th>Date Applied</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.map((app) => (
                <tr key={app._id}>
                  <td>
                    <strong>{app.fullName}</strong>
                  </td>
                  <td>{app.email}</td>
                  <td>
                    <span
                      style={{
                        background: getRoleColor(app.roleApplying),
                        color: "#ffffff",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    >
                      {app.roleApplying === "genome-informatics"
                        ? "🧬 Genome-informatics"
                        : app.roleApplying === "ai-ml"
                          ? "🤖 AI/ML"
                          : app.roleApplying === "frontend"
                            ? "🎨 Frontend"
                            : "⚙️ Backend"}
                    </span>
                  </td>
                  <td>
                    {app.resume ? (
                      <ResumeLink
                        href={app.resume}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Download /> PDF
                      </ResumeLink>
                    ) : (
                      <NoFile>No resume</NoFile>
                    )}
                  </td>
                  <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td>{app.university || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      )}

      {/* FOOTER */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "0.9rem",
        }}
      >
        Showing {filteredApps.length} of {totalApplications} applications
      </div>
    </DashboardContainer>
  );
}

export default AdminDashboard;
