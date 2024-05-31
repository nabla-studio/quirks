import type { IBCData } from '../types';

export const testnetIbc: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-764',
      connection_id: 'connection-753',
    },
    chain_2: {
      chain_name: 'titantestnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-807', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3125',
      connection_id: 'connection-2826',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-121',
      connection_id: 'connection-57',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-6668', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-490', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-2436',
      connection_id: 'connection-2267',
    },
    chain_2: {
      chain_name: 'titantestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-5969', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-2', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1274',
      connection_id: 'connection-1175',
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-621',
      connection_id: 'connection-633',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-4175', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-638', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-965',
      connection_id: 'connection-865',
    },
    chain_2: {
      chain_name: 'sgetestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1568', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1448',
      connection_id: 'connection-1552',
    },
    chain_2: {
      chain_name: 'sagatestnet',
      client_id: '07-tendermint-26',
      connection_id: 'connection-21',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-4946', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-20', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14',
    },
    chain_2: {
      chain_name: 'quicksilvertestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-13', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-20', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-595',
      connection_id: 'connection-529',
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1037', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-7', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nolustestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-102',
      connection_id: 'connection-120',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-0', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-110', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-39',
      connection_id: 'connection-23',
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-483',
      connection_id: 'connection-500',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-48', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-485', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
      {
        chain_1: {
          channel_id: 'channel-49',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc',
        },
        chain_2: {
          channel_id: 'channel-486',
          port_id:
            'wasm.stars1h99p7u2tvz79jppjwdddmkplvcpnsh0pmatl7dqkmdhnkgx59y2q6s0x9s',
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-224',
      connection_id: 'connection-176',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-120',
      connection_id: 'connection-56',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-147', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-489', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6',
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-4504',
      connection_id: 'connection-3905',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-4', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3651', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-42',
      connection_id: 'connection-31',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1374',
      connection_id: 'connection-1275',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-22', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4280', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-133',
      connection_id: 'connection-123',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1272',
      connection_id: 'connection-1172',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-196', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4172', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-143',
      connection_id: 'connection-130',
    },
    chain_2: {
      chain_name: 'nolustestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-208', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1990', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-102',
      connection_id: 'connection-93',
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-30',
      connection_id: 'connection-17',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-133', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-40', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
      {
        chain_1: {
          channel_id: 'channel-135',
          port_id:
            'wasm.neutron1tw9sg9e4l09l5rjglf4qfvcft470ljk5grdq3luagysyk83nzfusw2sxgq',
        },
        chain_2: {
          channel_id: 'channel-42',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc',
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'marstestnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2',
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-3419',
      connection_id: 'connection-2887',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-2', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-2083', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'marstestnet',
      client_id: '07-tendermint-33',
      connection_id: 'connection-30',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1933',
      connection_id: 'connection-1890',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-28', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-5499', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mantrachaintestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3545',
      connection_id: 'connection-3106',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-7944', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mantrachaintestnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3',
    },
    chain_2: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-256',
      connection_id: 'connection-207',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-174', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'likecointestnet',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1431',
      connection_id: 'connection-1336',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-2', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4357', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lavatestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-2554',
      connection_id: 'connection-2401',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-5', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-6092', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kyvetestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-2', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-10', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujiratestnet',
      client_id: '07-tendermint-73',
      connection_id: 'connection-48',
    },
    chain_2: {
      chain_name: 'terra2testnet',
      client_id: '7-tendermint-568',
      connection_id: 'connection-508',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-73', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-541', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-135',
      connection_id: 'connection-151',
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-4413',
      connection_id: 'connection-3814',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-140', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3316', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-743',
      connection_id: 'connection-827',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1932',
      connection_id: 'connection-1889',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-889', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-5498', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-170',
      connection_id: 'connection-178',
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-16',
      connection_id: 'connection-5',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-877', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-69', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
      {
        chain_1: {
          channel_id: 'channel-198',
          port_id:
            'wasm.juno1pjpntyvkxeuxd709jlupuea3xzxlzsfq574kqefv77fr2kcg4mcqvwqedq',
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc',
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-239',
      connection_id: 'connection-220',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-119',
      connection_id: 'connection-55',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-489', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-487', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-189',
      connection_id: 'connection-180',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1273',
      connection_id: 'connection-1173',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-129', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4174', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-123',
      connection_id: 'connection-98',
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-26',
      connection_id: 'connection-13',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-74', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-33', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
      {
        chain_1: {
          channel_id: 'channel-77',
          port_id: 'wasm.inj14nendtsz0c40n7xtzwkjmdc8dkuz835jdydxhn',
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc',
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthubtestnet',
      client_id: '07-tendermint-53',
      connection_id: 'connection-23',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1010',
      connection_id: 'connection-911',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-10', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1637', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'entrypointtestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-930',
      connection_id: 'connection-840',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-0', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1543', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1',
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-450',
      connection_id: 'connection-469',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-459', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-146',
      connection_id: 'connection-157',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-0', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-155', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravotatestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-611',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1260', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-3237',
      connection_id: 'connection-3407',
    },
    chain_2: {
      chain_name: 'titantestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3910', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-0', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2100',
      connection_id: 'connection-2447',
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-2777', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2528',
      connection_id: 'connection-2886',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1262',
      connection_id: 'connection-1157',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3306', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4156', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '7-tendermint-3407',
      connection_id: 'connection-3519',
    },
    chain_2: {
      chain_name: 'kujiratestnet',
      client_id: '07-tendermint-72',
      connection_id: 'connection-47',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-4004', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-51', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2073',
      connection_id: 'connection-2418',
    },
    chain_2: {
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-2765', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-2', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreumtestnet',
      client_id: '07-tendermint-104',
      connection_id: 'connection-69',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3529',
      connection_id: 'connection-3094',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-47', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-7894', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composabletestnet',
      client_id: '07-tendermint-23',
      connection_id: 'connection-18',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-273',
      connection_id: 'connection-237',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-11', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-329', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chain4energytestnet',
      client_id: '07-tendermint-18',
      connection_id: 'connection-5',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3393',
      connection_id: 'connection-2989',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-5', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-7735', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-118',
      connection_id: 'connection-98',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1445',
      connection_id: 'connection-1350',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-25', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4370', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    chain_2: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-113',
      connection_id: 'connection-101',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-0', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-160', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    chain_2: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2382',
      connection_id: 'connection-2727',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-0', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3152', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-895',
      connection_id: 'connection-685',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-118',
      connection_id: 'connection-54',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-462', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-486', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-858',
      connection_id: 'connection-663',
    },
    chain_2: {
      chain_name: 'titantestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-448', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-767',
      connection_id: 'connection-581',
    },
    chain_2: {
      chain_name: 'sagatestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-10',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-370', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-9', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-522',
      connection_id: 'connection-372',
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-261', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-0', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-213',
      connection_id: 'connection-151',
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-3319',
      connection_id: 'connection-2807',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-135', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1946', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-685',
      connection_id: 'connection-538',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1270',
      connection_id: 'connection-1169',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-339', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4170', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-953',
      connection_id: 'connection-734',
    },
    chain_2: {
      chain_name: 'mantrachaintestnet',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-506', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-855',
      connection_id: 'connection-659',
    },
    chain_2: {
      chain_name: 'lavatestnet',
      client_id: '07-tendermint-10',
      connection_id: 'connection-10',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-444', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-594',
      connection_id: 'connection-410',
    },
    chain_2: {
      chain_name: 'dydxtestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-297', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-77',
      connection_id: 'connection-73',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1195',
      connection_id: 'connection-1101',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-58', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3938', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-70',
      connection_id: 'connection-60',
    },
    chain_2: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-603',
      connection_id: 'connection-418',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-50', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-305', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1271',
      connection_id: 'connection-1171',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-6', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-4171', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4',
    },
    chain_2: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-45',
      connection_id: 'connection-39',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-4', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-34', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
];
