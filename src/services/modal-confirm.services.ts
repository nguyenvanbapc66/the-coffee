import axiosClient from 'src/api-client/axios-client';

export type locationType = {
  name: string;
  code: number;
};

type ProvinceType = locationType;

type DistrictType = {
  name: string;
  code: number;
  districts: locationType[];
};

type CommuneType = {
  name: string;
  code: number;
  wards: locationType[];
};

export const modalConfirmApi = {
  getAllProvince(): Promise<ProvinceType[]> {
    return axiosClient.get('/p');
  },
  getAllDistrict(codeProvince: string): Promise<DistrictType> {
    return axiosClient.get(`/p/${codeProvince}?depth=2`);
  },
  getAllCommune(codeDistrict: string): Promise<CommuneType> {
    return axiosClient.get(`/d/${codeDistrict}?depth=2`);
  },
};
