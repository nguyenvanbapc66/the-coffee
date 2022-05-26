import { Button, Divider, Input, Modal, ModalProps, Select, Skeleton } from 'antd';
import React, { useMemo, useState } from 'react';
import useSWRImmutable from 'swr/immutable';

import { CloseIcon } from '@components/icons';
import styles from './modal-confirm.module.scss';
import { DataConfirmType } from '@components/modules/product-detail-container';
import { modalConfirmApi } from 'src/services/modal-confirm.services';
import Image from 'next/image';
import { formatPrice, getDataFromStorage, isEmpty, setDataToStorage } from 'src/utils/helpers';
import { sleep } from 'src/utils/async-helpers';
import { dataShippingStorageKey } from 'src/constants/route.const';

type locationType = {
  name: string;
  code: string;
};

interface ModalConfirmProps extends ModalProps {
  setOpenPopup: (value: boolean) => void;
  dataConfirm: DataConfirmType;
}

const initialLocation = {
  name: '',
  code: '',
};

const ModalConfirm = ({ setOpenPopup, dataConfirm, ...props }: ModalConfirmProps) => {
  const [province, setProvince] = useState<locationType>(initialLocation);
  const [district, setDistrict] = useState<locationType>(initialLocation);
  const [commune, setCommune] = useState<locationType>(initialLocation);
  const [address, setAddress] = useState<string>('');
  const [isSuccessConfirm, setSuccessConfirm] = useState<boolean>(false);

  const onClosePopup = () => {
    if (setOpenPopup) {
      setOpenPopup(false);
    }
  };
  const onOk = async () => {
    if (setOpenPopup) {
      setSuccessConfirm(true);
      const dataStorage = getDataFromStorage(dataShippingStorageKey);
      const dataShipping = {
        name: dataConfirm.name,
        provinceName: province.name,
        districtName: district.name,
        communeName: commune.name,
        address,
        price: formatPrice(dataConfirm.price) + ' đ',
        size: dataConfirm.size,
        topping:
          !isEmpty(dataConfirm.topping) && dataConfirm.topping.addingPrice !== 0
            ? `${dataConfirm.topping.name} + ${formatPrice(dataConfirm.topping.addingPrice)}đ`
            : '',
      };
      if (dataStorage) {
        const newDataShipping = [...dataStorage, dataShipping];
        setDataToStorage(dataShippingStorageKey, newDataShipping);
      } else {
        setDataToStorage(dataShippingStorageKey, [dataShipping]);
      }
      await sleep(1000);
      setOpenPopup(false);
      setSuccessConfirm(false);
    }
  };

  const customizeFooter = () => {
    const disabledButton = !province.name || !district.name || !commune.name || !address;
    return [
      <Button
        key="submit"
        className={styles.buttonSave}
        onClick={onOk}
        disabled={disabledButton}
        loading={isSuccessConfirm}>
        Xác nhận
      </Button>,
    ];
  };

  const fetchApiProvince = () => modalConfirmApi.getAllProvince();
  const fetchApiDistrict = () => {
    if (!province.code) return;
    return modalConfirmApi.getAllDistrict(province.code);
  };
  const fetchApiCommune = () => {
    if (!district.code) return;
    return modalConfirmApi.getAllCommune(district.code);
  };

  const { data, error } = useSWRImmutable('allProvince', fetchApiProvince);
  const { data: dataDistrict } = useSWRImmutable(
    { name: 'allDistrict', province },
    fetchApiDistrict,
  );
  const { data: dataCommune } = useSWRImmutable({ name: 'allCommune', district }, fetchApiCommune);

  const isLoading = useMemo(() => !data && !error, [data, error]);

  const onChangeProvince = (value: string) => {
    const [code, name] = value.split(':');
    setProvince({ code, name });
    setDistrict(initialLocation);
    setCommune(initialLocation);
  };

  const onChangeDistrict = (value: string) => {
    const [code, name] = value.split(':');
    setDistrict({ code, name });
    setCommune(initialLocation);
  };

  const onChangeCommune = (value: string) => {
    const [code, name] = value.split(':');
    setCommune({ code, name });
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <Modal
      visible={true}
      onCancel={onClosePopup}
      closeIcon={<CloseIcon onClick={onClosePopup} />}
      centered
      title="Thông Tin Giao Hàng"
      footer={customizeFooter()}
      className="confirm-modal"
      {...props}>
      <div className="flex gap-3">
        <Select
          showSearch
          dropdownClassName="drop-down-custom"
          placeholder="Tỉnh..."
          notFoundContent="Không tìm thấy địa chỉ"
          onChange={onChangeProvince}
          allowClear
          optionFilterProp="children"
          filterOption={true}
          className="w-full max-w-[30%]">
          {!isLoading ? (
            data &&
            data.map(({ code, name }) => (
              <Select.Option key={`${code}:${name}`}>{name}</Select.Option>
            ))
          ) : (
            <Skeleton active />
          )}
        </Select>
        <Select
          showSearch
          dropdownClassName="drop-down-custom"
          placeholder="Huyện..."
          notFoundContent="Không tìm thấy địa chỉ"
          onChange={onChangeDistrict}
          value={district.name ? district.name : undefined}
          allowClear
          optionFilterProp="children"
          filterOption={true}
          className="w-full max-w-[30%]">
          {!!dataDistrict?.districts?.length &&
            dataDistrict.districts.map(({ code, name }) => (
              <Select.Option key={`${code}:${name}`}>{name}</Select.Option>
            ))}
        </Select>
        <Select
          showSearch
          dropdownClassName="drop-down-custom"
          placeholder="Xã..."
          notFoundContent="Không tìm thấy địa chỉ"
          onChange={onChangeCommune}
          value={commune.name ? commune.name : undefined}
          allowClear
          optionFilterProp="children"
          filterOption={true}
          className="w-full max-w-[40%]">
          {!!dataCommune?.wards?.length &&
            dataCommune.wards.map(({ code, name }) => (
              <Select.Option key={`${code}:${name}`}>{name}</Select.Option>
            ))}
        </Select>
      </div>
      <Input
        placeholder="Số/Ngách/Ngõ..."
        value={address}
        onChange={handleChangeAddress}
        className="mt-4"
        allowClear
      />
      <div className="mt-5 flex">
        <div className="max-w-[150px] mr-5">
          <Image src={dataConfirm.urlImage} className="rounded-md" />
        </div>
        <div className="w-full">
          <p className="text-[18px] font-bold text-[#e57905] mb-2">
            {formatPrice(dataConfirm.price)} đ
          </p>
          <div
            className="my-2"
            style={{ background: 'rgba(196, 196, 196, 0.3)', color: 'rgb(102, 102, 102)' }}>
            <p className="text-14 pl-2 py-2">Size</p>
          </div>
          <p className="text-18 pl-4">{dataConfirm.size}</p>
          {dataConfirm.topping.name && (
            <>
              <div
                className="my-2"
                style={{ background: 'rgba(196, 196, 196, 0.3)', color: 'rgb(102, 102, 102)' }}>
                <p className="text-14 pl-2 py-2">Topping</p>
              </div>
              <p className="text-18 pl-4" style={{ color: 'rgb(38, 38, 38)' }}>
                {dataConfirm.topping.name}
              </p>
              <p className="text-16 pl-4 font-semibold" style={{ color: 'rgb(38, 38, 38)' }}>
                + {formatPrice(dataConfirm.topping.addingPrice)}đ
              </p>
              <Divider className="m-0 border-[#c4c4c4] my-2" />
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
