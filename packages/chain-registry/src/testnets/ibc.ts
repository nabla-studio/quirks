import type { IbcData } from '../types';

export const testnetIbc: IbcData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sgetestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-965',
      connection_id: 'connection-865',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1568', port_id: 'transfer' },
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
      client_id: '07-tendermint-713',
      connection_id: 'connection-645',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-13',
      connection_id: 'connection-8',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-1299', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-8', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live' },
      },
    ],
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1189',
      connection_id: 'connection-1092',
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-586',
      connection_id: 'connection-598',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3931', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-591', port_id: 'transfer' },
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
      client_id: '07-tendermint-25',
      connection_id: 'connection-24',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-17',
      connection_id: 'connection-9',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-17', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-9', port_id: 'transfer' },
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
      client_id: '07-tendermint-14',
      connection_id: 'connection-14',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-125',
      connection_id: 'connection-134',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-10', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-123', port_id: 'transfer' },
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
      client_id: '07-tendermint-131',
      connection_id: 'connection-122',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1190',
      connection_id: 'connection-1093',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-195', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3932', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true },
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
      client_id: '07-tendermint-17',
      connection_id: 'connection-14',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-23',
      connection_id: 'connection-18',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-14', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-24', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
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
      client_id: '07-tendermint-539',
      connection_id: 'connection-671',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-832',
      connection_id: 'connection-739',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-622', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1419', port_id: 'transfer' },
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
      client_id: '07-tendermint-169',
      connection_id: 'connection-177',
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-15',
      connection_id: 'connection-4',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-175', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3', port_id: 'transfer' },
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
      client_id: '07-tendermint-188',
      connection_id: 'connection-179',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1192',
      connection_id: 'connection-1096',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-128', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3934', port_id: 'transfer' },
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
      chain_name: 'dydxtestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-682',
      connection_id: 'connection-612',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-2', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-1261', port_id: 'transfer' },
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
      client_id: '07-tendermint-2504',
      connection_id: 'connection-2866',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1187',
      connection_id: 'connection-1087',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3259', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3928', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
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
      chain_name: 'coshoshubtestnet',
      client_id: '07-tendermint-2302',
      connection_id: 'connection-2635',
    },
    chain_2: {
      chain_name: 'dydxtestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3026', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3', port_id: 'transfer' },
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
      client_id: '07-tendermint-2382',
      connection_id: 'connection-2727',
    },
    chain_2: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-3152', port_id: 'transfer' },
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
      client_id: '07-tendermint-0',
      connection_id: 'connection-0',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-104',
      connection_id: 'connection-122',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-0', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-111', port_id: 'transfer' },
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-585',
      connection_id: 'connection-402',
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-10',
      connection_id: 'connection-5',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-283', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-5', port_id: 'transfer' },
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
      client_id: '07-tendermint-421',
      connection_id: 'connection-330',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-227', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3', port_id: 'transfer' },
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
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5',
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1188',
      connection_id: 'connection-1091',
    },
    channels: [
      {
        chain_1: { channel_id: 'channel-5', port_id: 'transfer' },
        chain_2: { channel_id: 'channel-3930', port_id: 'transfer' },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: { status: 'live', preferred: true, dex: 'osmosis' },
      },
    ],
  },
];
