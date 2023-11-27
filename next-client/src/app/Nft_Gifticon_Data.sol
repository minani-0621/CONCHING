// SPDX-License-Identifier: MIT

pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Conching is ERC721Enumerable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("ConChing", "Gifticon") {
    }

    mapping(uint => string) public tokenURIs;
    mapping(uint256 => Nft_Gifticon_Data) public Nft_Gifticon_Data_Detail;

    // NFT 기프티콘 구조체
    struct Nft_Gifticon_Data {
        string publisher; // 발행처
        string title; // 기프티콘 제목
        uint256 expiry_date; // 유효기간
        string exchange_place; // 교환처
        uint256 price; //사용가능금액
        string gifticon_url; // 기프티콘 사진
        bool isUsed; //사용여부
    }

    function tokenURI(uint _tokenId) override public view returns (string memory){
        return tokenURIs[_tokenId];
    }

    // NFT 기프티콘 발급 함수
    // 입력 순서 : 발행처, 제목, 유효기간, 교환처, 사용가능금액, 기프티콘 사진 url
    function mint_Gifticon(
        string memory _publisher, string memory _title, uint256 _expiry_date, string memory _exchange_place, uint256 _price, string memory _gifticon_url) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        Nft_Gifticon_Data_Detail[newTokenId] = Nft_Gifticon_Data(
            _publisher,
            _title,
            _expiry_date,
            _exchange_place,
            _price,
            _gifticon_url,
            false // isUsed를 false로 초기화
        );

        _mint(msg.sender, newTokenId);
        return newTokenId;
    }

    // 관리자 ) 발행된 NFT 기프티콘 내용 조회 함수
    // 관리자 ) 발행된 NFT 내용 조회 함수
    function getAll_NFT() public view returns (Nft_Gifticon_Data[] memory){
        uint256 totalNFTs = _tokenIds.current(); // 현재까지 발행된 NFT의 총 개수
        Nft_Gifticon_Data[] memory nfts = new Nft_Gifticon_Data[](totalNFTs);

        for (uint256 i = 0; i < totalNFTs; i++) {
            Nft_Gifticon_Data storage nftData = Nft_Gifticon_Data_Detail[i + 1]; // 1부터 시작하는 인덱스를 사용
            nfts[i] = nftData;
        }

        return nfts;
    }


}