export interface EndpointInfo {
  endpoint: string;
  service_name: string;
  http_command: string;
  name: string;
  rpc_queue: string;
  rest_action: string;
  kwargs: any;
}

export type User = {
  user_id: string;
  real_user_id: string;
  role: number;
  organization: Organization;
  accessible_orgs: Organization[];
  real_org: Organization;
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
};

export type Organization = {
  org_id: string;
};

interface AuthState {
  refresh_token?: string;
  access_token?: string;
  user: User;
}
