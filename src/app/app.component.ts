import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular';
  availableColorVarients: Array<any> = [];
  productList: Array<any> = [
    {
      id: 8,
      productCode: 'PC408',
      name: 'exe',
      shortName: 'exe',
      shortDescription: 'exe',
      longDescription: 'exe',
      featuresAndBenifits: 'exe',
      category: {
        id: 1,
        name: 'Toothbrush',
      },
      isActive: true,
      thumbnailImage: {
        id: 42,
        url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709129596536_goby-KjNyjg_F78M-unsplash-removebg-preview 5 (2).png',
        fileName: 'goby-KjNyjg_F78M-unsplash-removebg-preview 5 (2).png',
        base64: null,
        label: null,
      },
      productImages: [
        {
          id: 47,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImagesDev/1709353000799_goby-KjNyjg_F78M-unsplash-removebg-preview 5 (1).png',
          fileName: 'goby-KjNyjg_F78M-unsplash-removebg-preview 5 (1).png',
          base64: null,
          label: null,
        },
      ],
      featureImages: [
        {
          id: 44,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709129597080_950X1200.png',
          fileName: '950X1200.png',
          base64: null,
          label: 'Image1',
        },
        {
          id: 45,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709129597494_600X600_1.png',
          fileName: '600X600_1.png',
          base64: null,
          label: 'Image2',
        },
        {
          id: 46,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709129597694_600X600.png',
          fileName: '600X600.png',
          base64: null,
          label: 'Image3',
        },
      ],
      weightVariants: [
        {
          id: 12,
          weightMaster: {
            id: 2,
            weight: 10.0,
            uom: {
              id: 1,
              name: 'gram',
              uomCode: 'UOM4487',
            },
          },
          colourVariants: [
            {
              id: 17,
              itemNumber: '563095558631',
              itemName: 'exe 10.0 gram null',
              salePrice: 8.0,
              discount: 10.0,
              regularPrice: 10.0,
              isActive: true,
              colourMaster: {
                id: 4,
                name: 'Lightgreen',
                hexCode: '#77fd99',
              },
            },
            {
              id: 18,
              itemNumber: '927348451324',
              itemName: 'exe 10.0 gram null',
              salePrice: 8.0,
              discount: 10.0,
              regularPrice: 10.0,
              isActive: true,
              colourMaster: {
                id: 1,
                name: 'Violet',
                hexCode: '#1d38d1',
              },
            },
          ],
        },
        {
          id: 13,
          weightMaster: {
            id: 3,
            weight: 10.0,
            uom: {
              id: 2,
              name: 'kg',
              uomCode: 'UOM3186',
            },
          },
          colourVariants: [
            {
              id: 19,
              itemNumber: '594902156542',
              itemName: 'exe 10.0 kg null',
              salePrice: 8.0,
              discount: 10.0,
              regularPrice: 10.0,
              isActive: true,
              colourMaster: {
                id: 4,
                name: 'Lightgreen',
                hexCode: '#77fd99',
              },
            },
          ],
        },
      ],
      rating: 0.0,
      inCart: false,
      createdBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      updatedBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      createdAt: '2024-02-28T14:13:17.837+00:00',
      updatedAt: '2024-03-04T05:10:51.896+00:00',
    },
    {
      id: 6,
      productCode: 'PC906',
      name: 'Test-sample',
      shortName: 'test-sample',
      shortDescription: 'sample',
      longDescription: 'sample',
      featuresAndBenifits: 'sample',
      category: {
        id: 1,
        name: 'Toothbrush',
      },
      isActive: true,
      thumbnailImage: {
        id: 32,
        url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709127754090_product-img-2.png',
        fileName: 'product-img-2.png',
        base64: null,
        label: null,
      },
      productImages: [
        {
          id: 33,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709127754378_goby-KjNyjg_F78M-unsplash-removebg-preview 5.png',
          fileName: 'goby-KjNyjg_F78M-unsplash-removebg-preview 5.png',
          base64: null,
          label: null,
        },
      ],
      featureImages: [
        {
          id: 34,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709127754635_950X1200.png',
          fileName: '950X1200.png',
          base64: null,
          label: 'Image1',
        },
        {
          id: 35,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709127755148_600X600.png',
          fileName: '600X600.png',
          base64: null,
          label: 'Image2',
        },
        {
          id: 36,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709127755358_600X600_1.png',
          fileName: '600X600_1.png',
          base64: null,
          label: 'Image3',
        },
      ],
      weightVariants: [
        {
          id: 10,
          weightMaster: {
            id: 1,
            weight: 5.0,
            uom: {
              id: 2,
              name: 'kg',
              uomCode: 'UOM3186',
            },
          },
          colourVariants: [
            {
              id: 15,
              itemNumber: '672772065474',
              itemName: 'Test-sample 5.0 kg pink',
              salePrice: 90.0,
              discount: 10.0,
              regularPrice: 100.0,
              isActive: true,
              colourMaster: {
                id: 6,
                name: 'pink',
                hexCode: '#e10ec5',
              },
            },
          ],
        },
      ],
      rating: 0.0,
      inCart: false,
      createdBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      updatedBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      createdAt: '2024-02-28T13:42:35.598+00:00',
      updatedAt: '2024-03-04T05:11:06.878+00:00',
    },
    {
      id: 5,
      productCode: 'PC518',
      name: 'sample',
      shortName: 'sample',
      shortDescription: 'sample',
      longDescription: 'sample',
      featuresAndBenifits: 'sample',
      category: {
        id: 3,
        name: 'sample',
      },
      isActive: true,
      thumbnailImage: {
        id: 27,
        url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709122001318_image-600x600 (2).jpg',
        fileName: 'image-600x600 (2).jpg',
        base64: null,
        label: null,
      },
      productImages: [
        {
          id: 28,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709122001671_image-600x600 (1).jpg',
          fileName: 'image-600x600 (1).jpg',
          base64: null,
          label: null,
        },
      ],
      featureImages: [
        {
          id: 29,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709122001798_950X1200.png',
          fileName: '950X1200.png',
          base64: null,
          label: 'Image1',
        },
        {
          id: 30,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709122002419_600X600.png',
          fileName: '600X600.png',
          base64: null,
          label: 'Image2',
        },
        {
          id: 31,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709122002705_600X600_1.png',
          fileName: '600X600_1.png',
          base64: null,
          label: 'Image3',
        },
      ],
      weightVariants: [
        {
          id: 9,
          weightMaster: {
            id: 2,
            weight: 10.0,
            uom: {
              id: 1,
              name: 'gram',
              uomCode: 'UOM4487',
            },
          },
          colourVariants: [
            {
              id: 14,
              itemNumber: '217004948637',
              itemName: 'sample 10.0 gram sample',
              salePrice: 18.0,
              discount: 10.0,
              regularPrice: 20.0,
              isActive: true,
              colourMaster: {
                id: 5,
                name: 'sample',
                hexCode: '#815a5a',
              },
            },
          ],
        },
      ],
      rating: 0.0,
      inCart: false,
      createdBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      updatedBy: null,
      createdAt: '2024-02-28T12:06:42.943+00:00',
      updatedAt: null,
    },
    {
      id: 4,
      productCode: 'PC737',
      name: 'Electric ToothBrush',
      shortName: 'electric-toothbrush',
      shortDescription:
        'Designed to deliver a superior clean, exceptional comfort, and a healthier smile.',
      longDescription:
        "The Root32 Sonic Electric Toothbrush is an investment in your oral health. With its advanced technology, & comfortable design, it's the perfect way to achieve a healthier, brighter smile.\n",
      featuresAndBenifits:
        "The Root32 Sonic Electric Toothbrush is an investment in your oral health. With its advanced technology, & comfortable design, it's the perfect way to achieve a healthier, brighter smile.\n",
      category: {
        id: 4,
        name: 'ToothBursh',
      },
      isActive: true,
      thumbnailImage: {
        id: 19,
        url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121474796_goby-KjNyjg_F78M-unsplash-removebg-preview 5 (1).png',
        fileName: 'goby-KjNyjg_F78M-unsplash-removebg-preview 5 (1).png',
        base64: null,
        label: null,
      },
      productImages: [
        {
          id: 20,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121475131_goby-KjNyjg_F78M-unsplash-removebg-preview 5 (1).png',
          fileName: 'goby-KjNyjg_F78M-unsplash-removebg-preview 5 (1).png',
          base64: null,
          label: null,
        },
        {
          id: 21,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121475371_image-600x600 (1).jpg',
          fileName: 'image-600x600 (1).jpg',
          base64: null,
          label: null,
        },
        {
          id: 22,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121475471_image-600x600 (3).jpg',
          fileName: 'image-600x600 (3).jpg',
          base64: null,
          label: null,
        },
      ],
      featureImages: [
        {
          id: 24,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121475803_950X1200.png',
          fileName: '950X1200.png',
          base64: null,
          label: 'Image1',
        },
        {
          id: 25,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121476178_600X600.png',
          fileName: '600X600.png',
          base64: null,
          label: 'Image2',
        },
        {
          id: 26,
          url: 'https://root32.s3.ap-south-1.amazonaws.com/productImages/1709121476418_600X600_1.png',
          fileName: '600X600_1.png',
          base64: null,
          label: 'Image3',
        },
      ],
      weightVariants: [
        {
          id: 7,
          weightMaster: {
            id: 4,
            weight: 40.0,
            uom: {
              id: 1,
              name: 'gram',
              uomCode: 'UOM4487',
            },
          },
          colourVariants: [
            {
              id: 10,
              itemNumber: '476575107370',
              itemName: 'Electric ToothBrush 40.0 gram Lightgreen',
              salePrice: 180.0,
              discount: 10.0,
              regularPrice: 200.0,
              isActive: true,
              colourMaster: {
                id: 4,
                name: 'Lightgreen',
                hexCode: '#77fd99',
              },
            },
            {
              id: 11,
              itemNumber: '193908164886',
              itemName: 'Electric ToothBrush 40.0 gram Red',
              salePrice: 270.0,
              discount: 10.0,
              regularPrice: 300.0,
              isActive: true,
              colourMaster: {
                id: 2,
                name: 'Red',
                hexCode: '#ff0000',
              },
            },
            {
              id: 12,
              itemNumber: '278245630359',
              itemName: 'Electric ToothBrush 40.0 gram Violet',
              salePrice: 360.0,
              discount: 10.0,
              regularPrice: 400.0,
              isActive: true,
              colourMaster: {
                id: 1,
                name: 'Violet',
                hexCode: '#1d38d1',
              },
            },
          ],
        },
        {
          id: 8,
          weightMaster: {
            id: 2,
            weight: 10.0,
            uom: {
              id: 1,
              name: 'gram',
              uomCode: 'UOM4487',
            },
          },
          colourVariants: [
            {
              id: 13,
              itemNumber: '638693301455',
              itemName: 'Electric ToothBrush 10.0 gram black',
              salePrice: 450.0,
              discount: 10.0,
              regularPrice: 500.0,
              isActive: true,
              colourMaster: {
                id: 3,
                name: 'black',
                hexCode: '#303031',
              },
            },
          ],
        },
      ],
      rating: 0.0,
      inCart: false,
      createdBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      updatedBy: {
        id: 1,
        emailId: 'gaurav.joshi@amelioratesolutions.com',
        firstName: 'Gaurav',
        lastName: 'Joshi',
      },
      createdAt: '2024-02-28T11:57:56.600+00:00',
      updatedAt: '2024-02-28T11:58:36.408+00:00',
    },
  ];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.productList.length; i++) {
      console.log('this is product', this.productList[i]);
      this.availableColorVarients[i] =
        this.productList[i].weightVariants[0].colourVariants;
    }
  }

  onWeightChange(productIndex: number, weightIndex: number) {
    this.availableColorVarients[productIndex] =
      this.productList[productIndex].weightVariants[weightIndex].colourVariants;
  }
}
